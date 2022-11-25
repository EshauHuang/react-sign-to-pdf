import "./Drop.scss";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DragBox from "../DragBox/DragBox";
import DropBox from "../DropBox/DropBox";

import { addSignatureToDoc } from "../../store/docSignatures/actions";
import { selectIsDropping, selectCurrentDrag } from "../../store/drag/selector";
import {
  selectDocSignatures,
  selectIsSaved
} from "../../store/docSignatures/selector";
import { selectSignatures } from "../../store/signatures/selector";

function Drop() {
  const dispatch = useDispatch();
  const currentDrag = useSelector(selectCurrentDrag);
  const signaturesArray = useSelector(selectSignatures);
  const docSignaturesArray = useSelector(selectDocSignatures);
  const isDropping = useSelector(selectIsDropping);
  const isSaved = useSelector(selectIsSaved);

  useEffect(() => {
    if (isSaved || !isDropping || !signaturesArray || !docSignaturesArray)
      return;

    const { itemId, parentId, x, y, dropTo } = currentDrag;
    const [, itemIndex] = itemId.split("-");
    const signatures = signaturesArray.find(
      (signature) => signature.id === parentId
    );
    const { isSign, signCount, ...newItem } = signatures.items[itemIndex];

    dispatch(
      addSignatureToDoc(docSignaturesArray, dropTo, {
        ...newItem,
        x,
        y
      })
    );
  }, [
    dispatch,
    isSaved,
    isDropping,
    currentDrag,
    signaturesArray,
    docSignaturesArray
  ]);
  return (
    <div className="container">
      <div className="drag-box-list">
        <DragBox id="box-1" />
      </div>

      <div className="drop-box-list">
        <DropBox id="drop-box-1" />
      </div>
    </div>
  );
}

export default Drop;
