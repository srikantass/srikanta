import { useState } from 'react';
import QRCode from 'react-qr-code'

function App() {
	const [value, setValue] = useState('');
	const [back, setBack] = useState('#FFFFFF');
	const [fore, setFore] = useState('#000000');
	const [size, setSize] = useState(256);

	const [selectedbgcolor, setSelectedbgcolor] = useState("White");
	const [selectedfgcolor, setSelectedfgcolor] = useState("Black");
	const [selectedsize, setSelectedsize] = useState(50);


	return (
		<div className="App">
			<center>
				<br />

				<div style={{ display: "inline-flex" }}>
					<div style={{ width: "50", textAlign: "right" }}>
						<a>Enter QR Code Value :</a>
					</div>

					<div style={{ width: "50", alignItems: "left" }}>
						<input
							type="text"
							onChange={(e) => setValue(e.target.value)}
							placeholder="Value of Qr-code"
						/>
					</div>

				</div>

				<br />
				{/* <input
					type="text"
					onChange={(e) => setBack(e.target.value)}
					placeholder="Background color"
				/> */}

				<div style={{ display: "inline-flex" }}>
					<div>
						<a>Select Background Color :</a>
					</div>
					<div>
						<select value={selectedbgcolor} onChange={(e) => setSelectedbgcolor(e.target.value)}>
							<option value="Select BG Color" selected>Select BG Color</option>
							<option value="White">White</option>
							<option value="Red">Red</option>
							<option value="Green">Green</option>
							<option value="Blue">Blue</option>
						</select>
					</div>

				</div>


				<br />
				<div style={{ display: "inline-flex" }}>
					<div>
						<a>Select Foreground Color :</a>
					</div>

					<div>
						<select value={selectedfgcolor} onChange={(e) => setSelectedfgcolor(e.target.value)}>
							<option value="Select FG Color" selected>Select BG Color</option>
							<option value="Black">Black</option>
							<option value="Red">Red</option>
							<option value="Green">Green</option>
							<option value="Blue">Blue</option>
						</select>
					</div>

				</div>

				<br />
				<div>
					<a>Select QR Code Size :</a>
					<select value={selectedsize} onChange={(e) => setSelectedsize(e.target.value)}>
						<option value="Select Size" selected>Select Size</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="150">150</option>
						<option value="200">200</option>
						<option value="250">250</option>
					</select>
				</div>

				<br />
				{value && (
					<QRCode
						title={value}
						value={value}
						bgColor={selectedbgcolor}
						fgColor={selectedfgcolor}
						includeMargin={true}
						level={"H"}
						size={selectedsize}
					/>
				)}
				<br />

			</center>
		</div>
	);
}

export default App;
