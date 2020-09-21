import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'

const FormFilter =({form, onChange}) =>{
return (
  <Form className="form-filter">
    <Form.Row>
      <p> Filtrar por: </p>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Categoria</Form.Label>
        <Form.Control
          as="select"
          defaultValue="Cualquier categoría"
          onChange={onChange}
          name="category"
        >
          <option value={0}>Cualquier categoría</option>
          <option value="Audio">Audio</option>
          <option value="Cameras">Cameras</option>
          <option value="Drones">Drones</option>
          <option value="Gaming">Gaming</option>
          <option value="Laptops">Laptops</option>
          <option value="Monitors & TV">Monitors & TV</option>
          <option value="PC Accessories">PC Accessories</option>
          <option value="Phones">Phones</option>
          <option value="Phone Accessories">Phone Accessories</option>
          <option value="Smart Home">Smart Home</option>
          <option value="Tablets & E-readers">Tablets & E-readers</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          as="select"
          defaultValue="Cualquier precio"
          name="price"
          onChange={onChange}
        >
          <option value="ANY_PRICE">Cualquier precio</option>
          <option value="SMALL_PRICE">0 - 300</option>
          <option value="MEDIUM_PRICE">300 - 600</option>
          <option value="LARGE_PRICE">600 - 1000</option>
          <option value="EXPENSIVE"> > 1000</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit" className="button-filter">
        Filtrar
      </Button>
    </Form.Row>
  </Form>
);

}
export default FormFilter