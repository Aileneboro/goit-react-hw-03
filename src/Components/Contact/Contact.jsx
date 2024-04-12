import { TiUser } from "react-icons/ti";
import { TiPhone } from "react-icons/ti";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div>
      <div>
        <p>
          <TiUser />
          {name}
        </p>
        <p>
          <TiPhone />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
