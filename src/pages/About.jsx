import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {

    return (


        <Layout>
            <Box sx={{
                my:15,
                textAlign:'center',
                p:2,
                "& h4":{
                    fontWeight:'bold',
                    my:2,
                    fontSize:'2rem'

                },
                '& p':{
                    textAlign:'justify',


                },
                "@media (max-width:600px)":{
                    mt:0,
                    '& h4':{
                        fontSize:'1.4rem'
                    }
                }

            }}>
                <Typography variant='h4'>
                    Welcome to my resturant
                </Typography>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam non omnis blanditiis itaque neque nostrum reiciendis sunt facilis, assumenda possimus ex dicta nisi distinctio incidunt! Atque eveniet rem culpa distinctio maiores enim repellendus, praesentium velit reiciendis. Voluptas ratione excepturi est obcaecati mollitia deleniti fugit debitis, sunt, ipsum minus, quae quod quasi. Voluptatem amet possimus iusto ex numquam neque aliquam quod ut fuga, optio illo dolorum vitae adipisci impedit natus in! Placeat explicabo cupiditate eveniet modi quia soluta maiores exercitationem quod odit, id iure magnam vel molestias beatae non aperiam, sed possimus vero dolore a. Eius cum quod architecto suscipit.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, quis? Ut cum consequuntur incidunt officia quibusdam quod quam nisi illum commodi consectetur veritatis, enim, dolores reprehenderit? Tenetur, maxime libero quia eaque, nulla ducimus omnis magni soluta quaerat inventore ea pariatur tempora nam voluptatibus quis. Officia minima voluptatum neque hic eos accusamus esse, adipisci, mollitia architecto aspernatur incidunt, et molestias! Porro aliquam quas unde quos similique quod culpa dolor quasi suscipit mollitia delectus aliquid laudantium nam, nihil eius. Beatae ab animi vero eum omnis nostrum pariatur! Quis quibusdam blanditiis cum rem aperiam repellendus repellat, iste dolor rerum magni eum id minus officiis, sit optio mollitia, neque expedita est. Expedita eius cupiditate fuga iste, eos error dicta laudantium, quis ipsa, vitae perferendis similique rerum doloremque sequi magni officia magnam? Ipsum obcaecati inventore nesciunt id beatae hic veniam non asperiores, consequatur, sapiente aperiam, ab est. Debitis neque aut repellat eos nesciunt consequuntur illum dolorum adipisci, et culpa dolorem reiciendis nostrum animi? Placeat harum voluptate voluptatibus esse vitae corrupti laborum similique id perferendis? Incidunt, quibusdam id veritatis quisquam nobis quia rerum laudantium autem magnam eaque veniam reprehenderit adipisci odio repellendus molestiae error cumque sapiente numquam, dolorem sunt asperiores corporis. Repellendus adipisci doloribus maiores quibusdam?
                </p>
            </Box>
        </Layout>


    )
}

export default About