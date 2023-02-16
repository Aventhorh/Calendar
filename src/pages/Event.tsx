import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/Calendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  });

  const addNewEvent = (event: IEvent) => {
    setModalOpen(false);
    createEvent(event);
  };

  return (
    <Layout>
      <EventCalendar events={events} />

      <Row justify="center">
        <Button onClick={() => setModalOpen(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        open={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
