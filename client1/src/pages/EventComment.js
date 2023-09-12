import React, { useEffect, useState } from "react";
import Inputs from "../components/Inputs";
import Date from "../components/date"
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { AddEventUser, GetEventUser } from "src/redux/actions/eventUserActions";
import AddComment from "src/components/comment/AddComment";
import Comment from "src/components/comment/Comment";

export default function EventListPage() {
  const dispatch = useDispatch()
  const Datacomment = useSelector(state => state.eventUser.eventUser)

  useEffect(() => {
    dispatch(GetEventUser(event.title))
  }, [Datacomment])
  const events = useSelector(state => state.events.events)

  const [message, setMessage] = useState("")
  const [show, setShow] = useState(false)
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [data, setData] = useState(Datacomment);
  const [event, setEvent] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("event");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const result = events.filter((test) => test.title == event.title);

  // add comments
  let addComments = async(newComment) => {
    await setData({
      ...data,
      "comment": newComment.comment,
      "createdAt":newComment.createdAt
    })
    dispatch(AddEventUser(data, setShow, setMessage))
    dispatch(GetEventUser(event.title))
  };


  // edit comment
  let editComment = (content) => {
    setData(Datacomment);
    delete data.updatedAt;
    delete data.__v;
    setData({
      ...data,
      "comment": content
    })
    dispatch(AddEventUser(data, setShow, setMessage))
    dispatch(GetEventUser(event.title))
  }
  // delete comment
  let commentDelete = () => {
    setData({
      ...Datacomment,
      "comment": ""
    })
    dispatch(AddEventUser(data, setShow, setMessage))
    dispatch(GetEventUser(event.title))
  };
  return (
    <div className="container p-4 mt-4">
      <div className="alert alert-success" role="alert" style={{ display: show ? "block" : "none" }}>
        {message}
      </div>
      <div >

        <div >
          <div className="d-flex">
            <div><h2>Event: {event.title || ""}</h2>
              <br /> <p>{event.date || ""}</p></div>
          </div>
          <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
            <span dangerouslySetInnerHTML={{ __html: result[0].description || "" }} />
          </div>
          {Datacomment ? (<>{!Datacomment.comment ? (<div>
            <AddComment buttonValue={"send"} addComments={addComments} /></div>) : (
            <Comment
              commentData={Datacomment}
              editComment={editComment}
              commentDelete={commentDelete}
              setDeleteModalState={setDeleteModalState}
            />)}</>) : (<></>)}


        </div>
      </div>
    </div>
  );
}