import React from 'react';
import { Stack, Typography } from '@mui/material';
import UseCaseSlider from './UseCaseSlider';

const HomeUseCases = () => {
  

  return (
    <>
    <Stack>
    <Typography
     data-aos="fade-up"
                    data-aos-duration="1000"
      sx={{
        color: "#2A53A2",
        fontSize: { xs: "20px", md: "30px" },
        fontFamily: "Montserrat",
        fontWeight: "bold",
        textAlign: { xs: "left", md: "center" },
        mb: 5,
        ml: { xs: 3, md: 0 },
      }}
    >
      Use Cases
    </Typography>
  </Stack>
    <Stack
     data-aos="fade-up"
                    data-aos-duration="1000"
      sx={{
        backgroundColor: "#FBFBFB",
        ml: { xs: 0, md: 5 },
        mr: { xs: 0, md: 5 },
        borderRadius: "20px",
        pt:10,
        pb:10,
        pl:{xs:2, md:15},
        pr:{xs:2, md:15},
      }}
    >   
       <UseCaseSlider />
    </Stack>
    </>
  );
};

export default HomeUseCases;
