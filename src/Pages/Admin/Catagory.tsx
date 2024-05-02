import CatagoryAdding from "@/components/Admin/CatagoryAdding";
import DeleteModal from "@/components/Admin/DeleteModal";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import axios from "axios";
import { setDefaultAutoSelectFamily } from "net";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type CatagoriesDetails = {
  name: string;
  _id: string;
};

const Catagory = () => {
  const [change, setChange] = useState({ id: "", name: "", isOpen: false });
  const [catagories, setCatagories] = useState<CatagoriesDetails[]>([]);
  const [select, setSelect] = useState({ id: "",isOpen:false});
  
  const fetchCatagories = async () => {
    try {
      const { data } = await axios.get("/auth/admin/catagory");
      setCatagories(data.catagories);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went Wrong");
      }
    }
  };

  useEffect(() => {
    fetchCatagories();
  }, [change,select]);

  const handleEdit = (id: string, name: string) => {
    setChange({ id, name, isOpen: true });
  };

  const handleDelete = async (id: string) => {
    setSelect({ id: id, isOpen: true });
  };

  return (
    <>
      <div className="my-5 mx-5 flex justify-end ">
        {change && <CatagoryAdding change={change} setChange={setChange} />}

        <button
          onClick={() => setChange({ id: "", name: "", isOpen: true })}
          className="bg-indigo-700 rounded-lg p-3 text-white font-medium "
        >
          + Create Category
        </button>
      </div>
      {select.isOpen && ( <DeleteModal select={select} setSelect={setSelect} />)}

      <div className="grid grid-cols-1  md:grid-cols-3 gap-2  px-4">
        {catagories.map((category, index) => (
          <Card key={category._id} className="w-full   shadow-xl">
            <CardContent className="mt-5">
              <div className="w-full items-center">
                <h1 className="capitalize text-lg font-medium ">
                  {" "}
                  {index + 1}. {category.name}
                </h1>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end space-x-3">
              <Button
                onClick={() => handleEdit(category._id, category.name)}
                variant="outline"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(category._id)}
                variant="outline"
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Catagory;
