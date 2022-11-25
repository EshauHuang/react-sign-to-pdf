import "./DropBox.scss";

import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";
import { drop } from "../../store/drag/action";
import { selectCurrentDrag } from "../../store/drag/selector";
import { selectDocSignatures } from "../../store/docSignatures/selector";

export default function DropBox({ id }) {
  const dispatch = useDispatch();
  const currentDrag = useSelector(selectCurrentDrag);
  const docSignatures = useSelector((state) => selectDocSignatures(state, id));
  return (
    <div
      id={id}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        const { id: dropTo } = e.target;
        const { clientX, clientY } = e;
        const { x, y, width, height } = e.target.getBoundingClientRect();
        const {
          mouseOffsetX,
          mouseOffsetY,
          width: itemWidth,
          height: itemHeight
        } = currentDrag;
        const minX = 0,
          minY = 0,
          maxX = width - itemWidth,
          maxY = height - itemHeight;

        const relativeX = clientX - mouseOffsetX - x;
        const relativeY = clientY - mouseOffsetY - y;

        const dragItemX =
          relativeX < minX ? 0 : relativeX > maxX ? maxX : relativeX;
        const dragItemY =
          relativeY < minY ? 0 : relativeY > maxY ? maxY : relativeY;

        dispatch(drop(dragItemX, dragItemY, dropTo));
      }}
      className="drop-box"
    >
      {id &&
        docSignatures.items.map((item, index) => (
          <Draggable
            defaultPosition={{ x: item.x, y: item.y }}
            bounds="parent"
            key={index}
          >
            <div className="drop-item">
              <div id={`${id}/item-${index}`}>{item.title}</div>
            </div>
          </Draggable>
        ))}
    </div>
  );
}
