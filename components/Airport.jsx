
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
const Airport = ({ airport }) => (
  <div >
    <Card>
      <CardHeader>{airport.city.cityName}</CardHeader>
      <CardBody>
        <CardText>
          {/* {JSON.stringify(airport)} */}
          Some information about the airport<br />
          Eg: The time-zone of {airport.city.cityName} is {airport.city.timeZoneName}
        </CardText>
        <Button>More Details</Button>
      </CardBody>
    </Card>

  </div>
)

export default Airport
