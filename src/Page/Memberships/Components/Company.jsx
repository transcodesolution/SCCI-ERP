import { Box, Container, Flex, Heading, IconButton, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Reusable } from './Personalinfo'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
const cards = [
    {
        title: 'Design Projects 1',
        text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
            'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
        title: 'Design Projects 2',
        text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
            'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    },
    {
        title: 'Design Projects 3',
        text:
            "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
            'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
];
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function Companyinfo({ values }) {

    const [slider, setSlider] = useState(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });


    return (
        <>


            <Box mt={2} p='4'>

                <Reusable fieldName={"Compnay's Name"} fieldValue={values?.companyName} />

            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'GST Number'} fieldValue={values?.gst} />

            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'Company Address'} fieldValue={values?.address} />

            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'City'} fieldValue={values?.city} />
            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'State'} fieldValue={values?.state} />
            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'Email'} fieldValue={values?.email} />
            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'WhatsApp number'} fieldValue={values?.companyWhatsappNumber} />
            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'Website'} fieldValue={values?.website} />
            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'Business Details'} fieldValue={values?.businessDetails} />
            </Box >
            <Box mt={2} p='4'>

                <Reusable fieldName={'About'} fieldValue={values?.about} />
            </Box >


            <Box
                position={'relative'}
                height={'300px'}
                width={'full'}
                overflow={'hidden'}>
                {/* CSS files for react-slick */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* Left Icon */}
                <IconButton
                    aria-label="left-arrow"
                    variant="ghost"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt size="40px" />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                    aria-label="right-arrow"
                    variant="ghost"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt size="40px" />
                </IconButton>
                {/* Slider */}
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {values?.companyPhoto?.map((card, index) => (
                        <Box
                            key={index}
                            height={'6xl'}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                        >
                            {/* This is the block you need to change, to customize the caption */}
                            <Container size="container.lg" height="600px" position="relative">
                                <Image src={card}/>
                            </Container>
                        </Box>
                    ))}
                </Slider>
            </Box>

            <br></br>

        </>)
}

export default Companyinfo