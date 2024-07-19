"use client";

import { useParams } from "next/navigation";
import ImageEditor from "../../components/ImageEditor";

const EditPage = () => {
  const params = useParams();
  const id = params?.id;

  if (!id) return <div>Loading...</div>;

  return <ImageEditor imageUrl={`https://picsum.photos/id/${id}`} />;
};

export default EditPage;
