import {
  Card, Button, CardHeader, CardBody
} from 'reactstrap';

import Link from 'next/link';

const AirportDetailsCard = ({ airport }) => {
  return (
    <div >
      <Card>
        <CardHeader>{airport.city.cityName}</CardHeader>
        <CardBody>
          <h5>Full detail about the airport</h5>
          {JSON.stringify(airport)}
          <br />
          <Link href="../">
            <Button className="btn-block mt-3">Go back</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default AirportDetailsCard
