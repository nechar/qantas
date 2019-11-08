import {
  Card, Button, CardHeader, CardBody
} from 'reactstrap';

import Link from 'next/link';

const AirportCard = ({ airport }) => {
  const link = `/airport?airportCode=${airport.airportCode}`;
  return (
    <div >
      <Card>
        <CardHeader>{airport.city.cityName}</CardHeader>
        <CardBody>
          <h5>A few details about the airport</h5>
          Eg: The time-zone of {airport.city.cityName} is {airport.city.timeZoneName}
          <br />
          <Link href={link}>
            <Button className="btn-block mt-3">More Details</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default AirportCard
