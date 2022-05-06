import React from "react";
import "./style.css";

function DataCard({ data }) {
	return (
		<div className="data-frame">
			<iframe
				src={data.frame_link}
				width="320"
				title={data.name}
				height="240"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
			<div className="link-text">
				<a href={data.map_link}>{data.name}</a>
				<div className="address-style">
					<span>
						<b>Address: </b>
					</span>
					<span>{data.address}</span>
				</div>
			</div>
		</div>
	);
}

export default DataCard;
