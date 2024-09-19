import { Stack, Card, Box, Typography } from '@mui/material';

interface IProps {
    title?: string,
    url?: string,
    description?: string,
}



export default function UseCaseCard(props: IProps) {

    return (
        <>
        <Stack p={2} spacing={2}>
   
                        <Card sx={{ p: 2.5, borderRadius: "15px" }}>
                            <Box
                                component={"img"}
                                src={props?.url}
                                alt=""
                                sx={{ width: "100%" }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: { xs: "12px", md: '14px' },
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    pt: 1,
                                    textAlign: "center",
                                }}
                            >
                                i’m A
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: { xs: "15px", md: '23px' },
                                    fontWeight: "bold",
                                    p: 1,
                                    textAlign: "center",
                                }}
                            >
                                {props?.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: "13.5px",
                                    color: "#565656",
                                    p: 1,
                                    textAlign: "center",
                                }}
                            >
                                {props?.description}
                            </Typography>
                        </Card>
                        </Stack>
        </>
    )
}