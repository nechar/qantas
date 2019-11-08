
import {
  Card, Button, CardHeader, CardBody,
  CardText
} from 'reactstrap';

import Link from 'next/link';

const AirportDetailsCard = ({ airport }) => {
  return (
    <div >
      <Card>
        <CardHeader>{airport.city.cityName}</CardHeader>
        <CardBody>
          <CardText>
            A few details about the airport<br />
            Eg: The time-zone of {airport.city.cityName} is {airport.city.timeZoneName}
          </CardText>

          <Link href="../">
            <Button>Go back</Button>
          </Link>
        </CardBody>
      </Card>


    </div>
  )
}

export default AirportDetailsCard
