import { Accordion, AccordionDetails, AccordionSummary, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'; // You were using this icon in your previous code
import FaqData from "./../Routes/data.json";

export const Faq = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box id="services" sx={{ mt: 5 }}>
            <Typography sx={{ fontSize: { xs: '14px', md: '25px' }, fontWeight: 700, color: '#000000', fontFamily: 'Montserrat', mb: 5, mt: 2 }}>
                Frequently Asked Questions
            </Typography>

            <Stack
                sx={{
                    backgroundColor: '#F2F2F2',
                    borderRadius: '10px',
                    p: 5,
                    mt: 2,
                    display: 'block',
                }}
            >
                <Grid container spacing={2}>
                    {FaqData?.faq?.map((item, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Accordion
                                elevation={0}
                                disableGutters
                                expanded={expanded === `panel${index}`}
                                onChange={handleAccordionChange(`panel${index}`)}
                                sx={{
                                    borderRadius: '20px',
                                    padding: '5px',
                                    display: 'flex',
                                    width: '100%',
                                    marginBottom: '15px',
                                    flexDirection: 'column',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === `panel${index}` ? <IndeterminateCheckBoxRoundedIcon sx={{ color: '#2A53A2' }} /> : <AddBoxRoundedIcon sx={{ color: '#2A53A2' }} />}
                                    sx={{ px: '20px' }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: { xs: '12px', md: '14px' },
                                            color: '#000000',
                                            fontFamily: 'Montserrat',
                                        }}
                                    >
                                        {item?.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ px: '20px' }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '12px', md: '14px' },
                                            color: '#6F6C90',
                                            fontFamily: 'Montserrat',
                                        }}
                                    >
                                        {item?.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Box>
    );
};
