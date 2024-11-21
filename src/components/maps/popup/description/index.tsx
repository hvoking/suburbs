// App imports
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ info }: any) => {
	if (!info) return <></>
	return (
		<div className="card-thumbnail-description">
			<div><strong>Id</strong> {info.id}</div>
			<div><strong>SA2 Name</strong> {info.SA2_NAME21}</div>
			<div><strong>GCC Name</strong> {info.GCC_NAME21}</div>
			<div><strong>GCC Code</strong> {info.GCC_CODE21}</div>
			<div>
				<strong>Area SQKM</strong> {siFormat(Math.round(info.AREASQKM21))}
			</div>
		</div>
	)
}

Description.displayName="Description";