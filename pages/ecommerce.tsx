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
    const [value, setValue] = useState(1);
    const [priceRange, setpriceRange] = useState({
        low: 0,
        high: 1000,
    });
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
    //managing data
    const [data, setData] = useState(props.data.slice(0, 12))
    const loadMoreProducts = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setData(props.data.slice(0, data.length + 12))
    }
    //manage data with filters
    const searchByCategories = (e: { preventDefault: () => void },n:number) => {
        e.preventDefault();
        setData(props.data.filter((item) => item.categoryId == n).slice(0, 12))
    }
    const searchByPrice = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setData(props.data.filter((item) => item.price >= priceRange.low && item.price <= priceRange.high).slice(0, 12))
    }
    return (
        <Layout title='Ecommerce' link='https://drive.google.com/file/d/1GOIGYGYcExKks6qGrKTTnHEz7nQmMeTp/view?usp=sharing'>
            <main className={styles.main}>
                <h1>The Best Ecommerce</h1>
                <nav>
                    <Button onClick={(e)=>searchByCategories(e,1)} auto width="30%" mx="5px">Books</Button>
                    <Button onClick={(e) => searchByCategories(e, 2)} auto width="30%" mx="5px">Home</Button>
                    <Button onClick={(e)=>searchByCategories(e,3)} auto width="30%" mx="5px">Kids</Button>
                    <Button onClick={(e)=>searchByCategories(e,4)} auto width="30%" mx="5px">Health</Button>
                    <Button onClick={(e)=>searchByCategories(e,5)} auto width="30%" mx="5px">Clothing</Button>
                </nav>
                <section className={styles.products}>
                    <Button type='secondary' auto onClick={() => setDrawer(true)} >Show Filters</Button>
                    <section>
                        <h2>Products</h2>
                        <div>
                            <Grid.Container gap={2} justify="center">
                                {data.map((product) => (
                                    <Grid xs={24} sm={12} md={8} lg={6} key={product.id}>
                                        <ProductCard name={product.name} price={product.price} rating={product.rating} image={'http://placeimg.com/640/480/' + product.id.toString()} />
                                    </Grid>
                                ))}
                                <Button onClick={(e) => loadMoreProducts(e)}>Load More</Button>
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
                                        <Slider onChange={(val)=>setpriceRange({
                                            low: val,
                                            high: priceRange.high
                                        })} value={priceRange.low} step={10} max={1000} min={0} initialValue={0} showMarkers width="75%" />
                                        <Spacer />
                                        <p>To: ($)</p>
                                        <Slider onChange={(val)=>setpriceRange({
                                            low: priceRange.low,
                                            high: val
                                        })} value={priceRange.high}  step={10} max={1000} min={10} showMarkers width="75%" />
                                    </>
                                    <Spacer />
                                    <Button onClick={(e)=>searchByPrice(e)}>Apply</Button>
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