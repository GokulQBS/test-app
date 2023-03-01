import React from "react";

function productrow() {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/BMW_6-cylinder_block_Al-Mg.jpg/300px-BMW_6-cylinder_block_Al-Mg.jpg"/>
            <h3>Advantages</h3>
            <ul>
                <li>Good Strength-to-Weight Ratio.</li>
                <li>Great Resistance to Corrosion.</li>
                <li>Excellent Electrical Conductivity.</li>
                <li>Fully Recyclable and Reusable in Production.</li>

            </ul>
            <Button varient="primary">hello guys</Button>
        </div>
    );
}

export default productrow;