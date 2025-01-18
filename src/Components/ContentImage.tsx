import { Box, Grid, Paper, Stack, Typography } from "@mui/material"



interface IContentImage {
    featureData: {
        steps?: string;
        title: string;
        description: string;
        image: string;
    }[];
}

const ContentImage = (props: IContentImage) => {
    return (
        <>

            <Stack>
                <Typography
                    sx={{
                        color: "#2A53A2",
                        fontSize: { xs: "18px", md: "24px" },
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        pb: 2,
                        textAlign: 'center'
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    How It Works—It’s Super Simple!
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Montserrat",
                        color: "#1A2D4C",
                        fontSize: { xs: "15px", md: "16px" },
                        lineHeight: "30px",
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                    data-aos="fade-up"
                    data-aos-duration="900"
                >
                    Start managing your business in less than 30 minutes

                </Typography>
            </Stack>
            {props?.featureData.map((feature, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        height: { xs: "fit-content", md: "85vh" },
                    }}
                >
                    <Stack>
                        <Grid
                            container
                            justifyContent="center"
                            alignContent="center"
                            alignItems="center"
                            spacing={{ xs: 2, md: 10 }}
                            sx={{
                                flexDirection: {
                                    xs: "column-reverse",
                                    md: index % 2 === 0 ? "row" : "row-reverse",
                                },
                                pb: { md: "80px" },
                            }}
                        >
                            <Grid item xs={12} md={5} sx={{ m: { xs: 2, md: 0 } }}>
                                <Box
                                    component="img"
                                    src={feature.image}
                                    alt={feature.title}
                                    sx={{ width: "100%" }}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Stack
                                    sx={{
                                        ml: 2,
                                        pt: { xs: 0, md: 6 },
                                        pb: { xs: 0, md: 6 },
                                        backgroundColor: "#ffffff",
                                        borderRadius: "15px",
                                    }}
                                >
                                    <Paper sx={{ p: 2, boxShadow: "none" }}>
                                        <Typography
                                            sx={{
                                                color: "#A5A5A5",
                                                fontSize: { xs: "18px", md: "24px" },
                                                fontFamily: "Montserrat",
                                                fontWeight: "bold",
                                                pb: 2,
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            {feature.steps}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "#2A53A2",
                                                fontSize: { xs: "18px", md: "24px" },
                                                fontFamily: "Montserrat",
                                                fontWeight: "bold",
                                                pb: 2,
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "Montserrat",
                                                color: "#1A2D4C",
                                                fontSize: { xs: "15px", md: "16px" },
                                                lineHeight: "30px",
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="900"
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Paper>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            ))}
        </>
    )
}
export default ContentImage 