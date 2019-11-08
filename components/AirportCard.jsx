
import {
  Card, Button, CardHeader, CardBody,
  CardText
} from 'reactstrap';

import Link from 'next/link';

const AirportCard = ({ airport }) => {
  const link = `/airport?airportCode=${airport.airportCode}`;
  return (
    <div >
      <Card>
        <CardHeader>{airport.city.cityName}</CardHeader>
        <CardBody>
          <CardText>
            {/* {JSON.stringify(airport)} */}
            A few details about the airport<br />
            Eg: The time-zone of {airport.city.cityName} is {airport.city.timeZoneName}
          </CardText>

          <Link href={link}>
            <Button>More Details</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default AirportCard
