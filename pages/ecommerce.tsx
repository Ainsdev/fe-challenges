import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { useState } from 'react'
import { Layout } from '../layouts/Layout'
import { Drawer, Button, Slider, Spacer, AutoComplete, Rating, Card, Text, Grid } from '@geist-ui/core'
import styles from '../styles/Ecommerce.module.scss'
import ProductCard from '../components/ProductCard'
import { Product } from '../interfaces'

const WeatherPage: NextPage<{ data: Product[] }> = (props) => {
    const [drawer, setDrawer] = useState(false);
    const [value, setValue] = useState(1)
    const options = [
        { label: 'London', value: 'london' },
        { label: 'Sydney', value: 'sydney' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Shanghai', value: 'shanghai' },
    ]
    //data
    
    const [data, setData] = useState(props.data)
    
    return (
        <Layout title='Ecommerce' link='https://drive.google.com/file/d/1GOIGYGYcExKks6qGrKTTnHEz7nQmMeTp/view?usp=sharing'>
            <main className={styles.main}>
                <h1>The Best Ecommerce</h1>
                <nav>
                    <Button auto width="30%" mx="5px">Books</Button>
                    <Button auto width="30%" mx="5px">Home</Button>
                    <Button auto width="30%" mx="5px">Kids</Button>
                    <Button auto width="30%" mx="5px">Health</Button>
                    <Button auto width="30%" mx="5px">Clothing</Button>
                </nav>
                <section className={styles.products}>
                    <Button type='secondary' auto onClick={() => setDrawer(true)} >Show Filters</Button>
                    <section>
                        <h2>Products</h2>
                        <div>
                            <Grid.Container gap={2} justify="center">
                                {data.map((product) => (
                                    <Grid xs={24} sm={12} md={8} lg={6} key={product.id}>
                                        <ProductCard name={product.name} price={product.price} rating={product.rating} image={'http://placeimg.com/640/480/'+product.id.toString()} />
                                    </Grid>
                                ))}
                            </Grid.Container>
                        </div>
                    </section>
                    <section>
                        <Drawer keyboard disableBackdropClick visible={drawer} onClose={() => setDrawer(false)} placement="bottom">
                            <Drawer.Subtitle><div>
                                <Button onClick={() => setDrawer(false)} type="error" ghost auto scale={0.7}>Esc</Button>
                            </div></Drawer.Subtitle>
                            <Drawer.Title style={{
                                padding: '20px'
                            }}>Filters</Drawer.Title>
                            <Drawer.Content className={styles.filters}>
                                <article>
                                    <p>By Pricing</p>
                                    <>
                                        <p>From: ($)</p>
                                        <Slider step={10} max={1000} min={0} initialValue={0} showMarkers width="75%" />
                                        <Spacer />
                                        <p>To: ($)</p>
                                        <Slider step={10} max={1000} min={10} initialValue={10} showMarkers width="75%" />
                                    </>
                                    <Spacer />
                                    <Button>Apply</Button>
                                </article>
                                <article>
                                    <p>By Colors</p>
                                    <AutoComplete clearable placeholder="Color..." options={options} />
                                    <Spacer />
                                    <Button>Apply</Button>
                                </article>
                                <article>
                                    <p>By Rating</p>
                                    <Rating value={value} onValueChange={setValue} />
                                    <Spacer />
                                    <Button>Apply</Button>
                                </article>
                            </Drawer.Content>
                        </Drawer>
                    </section>
                </section>
            </main>
        </Layout>
    )
}

export default WeatherPage

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await axios.get('http://api.devtoolstech.in/ecommerce/products') as { data: Product[] }

    return {
        props: {
            data
        }
    }
}