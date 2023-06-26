import { GetStaticProps, NextPage } from "next";
import { Layout } from "../layouts/Layout";
import { Button, Table } from "@geist-ui/core";
import axios from "axios";
import { useState } from "react";

type Props = {
  name: string;
  protocol: string;
  payout_fee: string;
  payout_enabled: string;
};

const CryptoPage: NextPage<{ data: any }> = (props) => {
    const [specificData, setSpecificData] = useState([]);
  //managing data
  const data = props.data;
  // data is an object
  //Convert json to array of objects of type Props
  const dataProcessed = Object.keys(data).map((key) => {
    return {
      name: key,
      protocol: data[key].networks[0].protocol
        ? data[key].networks[0].protocol
        : data[key].networks[0].network,
      payout_fee: data[key].networks[0].payout_fee,
      payout_enabled: data[key].networks[0].payout_enabled.toString(),
    };
  });

  const renderAction = (value: any) => {
    const View = () => {
      console.log(value);
    };
    return (
      <Button auto scale={1 / 3} font="12px" onClick={View}>
        View
      </Button>
    );
  };
  return (
    <Layout title="CryptoChile" link="https://api.exchange.cryptomkt.com/">
      <h2 className="text-2xl font-bold">Crypto Chile</h2>
      <Table hover data={dataProcessed}>
        <Table.Column prop="name" label="name" />
        <Table.Column prop="protocol" label="protocol" />
        <Table.Column prop="payout_fee" label="fee" />
        <Table.Column prop="payout_enabled" label="enabled" />
        <Table.Column
          prop="view"
          label="More Data"
          width={150}
          render={(e) => renderAction(e)}
        />
      </Table>
    </Layout>
  );
};

export default CryptoPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = (await axios.get(
    "https://api.exchange.cryptomkt.com/api/3/public/currency"
  )) as { data: any };

  return {
    props: {
      data,
    },
  };
};
