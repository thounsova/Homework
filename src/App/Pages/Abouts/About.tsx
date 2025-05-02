import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setDetail(res.data));
    };

    fetchData();
  }, [id]);

  console.log(detail, "==dete");

  return <div>{detail.title}</div>;
};

export default ProductDetail;
