import { useState, useEffect } from "react";

import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";

import { getComponents } from "../services/api";

function Dashboard() {

  const [image, setImage] = useState(null);
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadComponents = async () => {
      const data = await getComponents();
      setComponents(data);
    };

    loadComponents();
  }, []);

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold mb-6">
        Diagram Dashboard
      </h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <UploadBox onUpload={setImage} />
        {image && (
          <p className="mt-2 text-sm">
            Uploaded: <b>{image.name}</b>
          </p>
        )}
      </div>

      <div className="grid grid-cols-4 gap-6">

        <div className="col-span-3 bg-white p-4 rounded shadow">
          <DiagramViewer image={image} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <ComponentList
            components={components}
            selected={selected}
            onSelect={setSelected}
          />
        </div>

      </div>

    </div>

  );
}

export default Dashboard;