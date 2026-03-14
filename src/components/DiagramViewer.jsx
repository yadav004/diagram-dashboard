import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function DiagramViewer({ image }) {

  if (!image) {
    return <p>No diagram uploaded</p>;
  }

  return (
    <div>

      <TransformWrapper>

        {({ zoomIn, zoomOut, resetTransform }) => (

          <div>

            <div style={{ marginBottom: "10px" }}>
              <button onClick={() => zoomIn()}>Zoom In</button>
              <button onClick={() => zoomOut()}>Zoom Out</button>
              <button onClick={() => resetTransform()}>Reset</button>
            </div>

            <TransformComponent>

              <img
                src={URL.createObjectURL(image)}
                alt="diagram"
                style={{ maxWidth: "100%" }}
              />

            </TransformComponent>

          </div>

        )}

      </TransformWrapper>

    </div>
  );
}

export default DiagramViewer;