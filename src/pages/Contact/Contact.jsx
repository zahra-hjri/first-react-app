import Title from "../../components/Title/Title";

import { useState } from "react";

const Contact = () => {
  const [title] = useState("contact us");

  return (
    <div className="mainAbout">
      <Title title={title} />
      <div className="aboutContainer">
        <figure>
          <img src="" alt="" />
        </figure>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, error
          consequatur nulla eaque aliquid soluta voluptas iure repellat quod
          quia ex voluptatem corporis nostrum assumenda voluptates, aperiam
          aliquam sequi esse.
        </p>
      </div>
    </div>
  );
};

export default Contact;
