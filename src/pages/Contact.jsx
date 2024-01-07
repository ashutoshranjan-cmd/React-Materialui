import React from "react";
import Layout from "../components/Layout";
import { Box, Table, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {


    return (

        <Layout>
            <Box sx={{
                my: 10, ml:5,
                "& h4": {
                    fontWeight: 'bold',
                    mb: 2
                }
                ,
            }}>
                <Typography variant="h4">
                    Contact My Resturant

                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo amet delectus officia, inventore quia repudiandae doloribus a aspernatur alias sunt quaerat. Inventore repudiandae iusto commodi, perferendis veritatis ipsa nihil modi facilis soluta. Nesciunt laudantium optio accusamus vitae odit. Sunt magnam laboriosam iure molestiae doloribus numquam illum hic! Optio iure unde, dicta vero aspernatur rerum tenetur ullam, voluptatum, nemo facere soluta porro doloremque eos. Ducimus beatae quae labore sit temporibus veritatis impedit voluptas, unde maxime voluptate tempore facere porro molestiae esse quis aspernatur omnis quod enim, sed dignissimos incidunt sunt! Explicabo odio excepturi neque ex dicta laboriosam impedit dolorum libero, exercitationem, fuga veniam ipsam rem. Libero ad unde dolores quam officia ullam enim ex soluta, architecto voluptatem, expedita consectetur et ratione! Aspernatur sapiente aut praesentium, animi aliquam architecto doloribus inventore pariatur et quas facere soluta corporis, ullam omnis accusantium nemo perferendis sint. Et quo ad rem, possimus exercitationem animi, voluptatem amet tenetur qui distinctio doloremque delectus dolorum. Autem quidem eaque labore, debitis exercitationem sed cum dolorum aspernatur, nostrum, doloribus deserunt sequi ratione in totam amet inventore vitae. Beatae, doloribus aspernatur! Animi culpa recusandae ipsam tempora at accusantium provident voluptatem molestias amet! Deleniti quibusdam iste laborum nam neque, accusamus praesentium rerum alias cupiditate fugiat, accusantium blanditiis asperiores, corporis eum similique rem illo sit nemo minima. Commodi sit nam, minus deserunt beatae nihil sunt rerum perferendis mollitia provident totam atque quis ipsa maiores quos est placeat reprehenderit enim odit similique nisi cupiditate nostrum! Obcaecati animi hic consequatur iste amet voluptas placeat illum at voluptate, distinctio aliquid. Nostrum nihil, praesentium, expedita laborum saepe quo quas mollitia voluptatum a repellat placeat, nisi dolorum. Voluptates maiores, esse totam quae repellat enim velit? Quod similique odio ut sapiente voluptates, voluptatum repudiandae quas perspiciatis nemo quidem quos recusandae libero autem expedita excepturi minima aut accusamus dignissimos ipsum.</p>

                <h1>Menu page</h1>

            </Box>
            <Box sx={{m:3,width:'600px',ml:10, '@media (max-width:600px)':{
                width:'250px'
            }}}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{bgcolor:'black',color:'white'}} align="center">Contact Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>

                                <TableCell >
                                    <SupportAgentIcon sx={{ color: 'red', pt:1, fontSize: '2rem' }} />  184826481246 (toll free)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                    <MailIcon sx={{ color: 'skyblue', pt:1, fontSize: '2rem' }} />  myresturan@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                               <TableCell>
                                    <CallIcon sx={{ color: 'green', pt:1, fontSize: '2rem' }} /> 98298327253 (toll free)
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}
export default Contact