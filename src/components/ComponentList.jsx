function ComponentList({ components, selected, onSelect }) {

  return (

    <div>

      <h3 className="text-lg font-semibold mb-4">
        Components
      </h3>

      {components.map((comp) => (

        <div
          key={comp.id}
          onClick={() => onSelect(comp)}
          className={`p-3 rounded mb-2 cursor-pointer border
          ${
            selected?.id === comp.id
              ? "bg-blue-100 border-blue-400"
              : "bg-gray-50"
          }`}
        >
          {comp.name}
        </div>

      ))}

    </div>

  );

}

export default ComponentList;