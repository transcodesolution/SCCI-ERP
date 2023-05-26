
import Membercard from "../../Components/Commom/Card";
import { Box, Button, Flex, Input, SimpleGrid, Stack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ApiPost } from "../../Api/ApiData";
import { AiOutlinePlus } from "react-icons/ai";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Filtermodel from "./Components/Filtermodel";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import Permissionmodel from "../../Components/Commom/Permissionmodel";
let timeout;
const Sccimembers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pageCount, setCountPage] = useState(1);
  const [members, setMembers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState("")
  const [show, setShow] = useState(false)
  const openModel = () => setShow(true)
  const closeModel = () => setShow(false)
  const navigate = useNavigate();
  function handlePageClick(event) {
    setPage(event.selected + 1);
  }
  const getFilterMember = (body) => {
    ApiPost(`/admin/member/get/all`, {
      page,
      limit,
      ...body,
    })
      .then((response) => {
        onClose();
        setPage(response?.data?.data?.state?.page);
        setLimit(response?.data?.data?.state?.limit);
        setMembers(response?.data?.data?.member_data);
        setCountPage(response?.data?.data?.state?.page_limit);
      })
      .catch((error) => toast.error(error.message));
  };
  const getAllMembers = () => {
    ApiPost("/admin/member/get/all", {
      page,
      limit,
      search,
    }).then((response) => {
      setMembers(response?.data?.data?.member_data);
      setPage(response?.data?.data?.state?.page);
      setLimit(response?.data?.data?.state?.limit);
      setCountPage(response?.data?.data?.state?.page_limit);
      console.log("first", response?.data?.data?.member_data);
    });
  };
  const getAllCategory = async () => {
    await ApiPost("/admin/member/type/get/all", { search: "" }).then(
      (response) => {
        setCategories(response?.data?.data);
      }
    );
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  useEffect(() => {
    getAllMembers();
  }, [page, limit]);
  useEffect(() => {
    clearTimeout(timeout);
    setTimeout(() => {
      getAllMembers();
    }, 1000);
  }, [search]);
  const handleDownload = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";
    const marginLeft = 0;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    const headers = [["FirstName", "MiddleName", "LastName", "Phone", "Email"]];
    const data = members.map((post) => [
      post.firstName,
      post.middleName,
      post.lastName,
      post.phone,
      post.email,
    ]);
    doc.autoTable({
      head: headers,
      body: data,
      startY: 50,
      styles: {
        fontSize: 12,
        cellPadding: 6,
        overflow: "linebreak",
        tableWidth: "auto",
      },
      margin: { top: 50 },
    });
    doc.save("api-data.pdf");
  };
  const handleXLSX = () => {
    const headers = [["FirstName", "MiddleName", "LastName", "Phone", "Email"]];
    const data = members.map((post) => [
      post.firstName,
      post.middleName,
      post.lastName,
      post.phone,
      post.email,
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([...headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet);
    const xlsxBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAs(new Blob([xlsxBuffer]), "api-data.xlsx");
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          marginTop: "65px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <label style={{ width: "50%", display: "block" }}>
            <Input
              bg={"whiteAlpha.600"}
              type="text"
              placeholder="Search"
              name="name"
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "15px" }}>
              <Box textAlign={"center"}>
                <Button
                  onClick={() =>
                    navigate("/mail", {
                      state: {
                        category: [],
                        individual: members.map((data) => data._id),
                      },
                    })
                  }
                >
                  {" "}
                  Mail{" "}
                </Button>
              </Box>
            </div>
            <Menu>
              <MenuButton as={Button}>Export</MenuButton>
              <MenuList>
                <MenuItem>
                  <button onClick={handleDownload}>PDF</button>
                </MenuItem>
                <MenuItem>
                  <button onClick={handleXLSX}> XLSX</button>
                </MenuItem>
              </MenuList>
            </Menu>
            <div style={{ marginLeft: "15px" }}>
              <Box textAlign={"center"}>
                <Button onClick={onOpen}>
                  {" "}
                  <AiOutlinePlus /> &nbsp; Filter Details{" "}
                </Button>
              </Box>
            </div>
          </div>
        </div>
        <Box style={{ marginTop: "20px" }}>
          <SimpleGrid columns={[1, 2, 2, 2, 3, 5, 5]} spacing={5}>
            {members.map((data) => (
              <Membercard data={data} openModel={openModel} setSelectedId={setSelectedId} />
            ))}
          </SimpleGrid>
        </Box>
        <Flex mt={4} justifyContent={"space-between"}>
          <Box>
            <Stack spacing={2} className="pagination_block">
              <div className="table-filter-info">
                <ReactPaginate
                  pageCount={pageCount}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
              <div class="my-2 my-md-0">
                <div class="d-flex align-items-center pagination-drpdown">
                  <select
                    class="form-control pagination-drpdown1 dropdownPage"
                    id="kt_datatable_search_status"
                    onChange={(e) => {
                      setLimit(parseInt(e.target.value));
                    }}
                    value={limit}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
            </Stack>
          </Box>
        </Flex>
      </div>
      <Filtermodel
        isOpen={isOpen}
        categories={categories}
        onClose={onClose}
        getFilterMember={getFilterMember}
      />
            <Permissionmodel {...{ closeModel, show, selectedId,getAllMembers }} />

    </>
  );
};
export default Sccimembers;