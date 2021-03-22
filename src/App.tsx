import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TripList from "./components/trips-list/trips-list.component";
import Header from "./components/headr/header.component";
import { getTrip } from "./service/fetch";
import Filter from "./components/filter/filter";
import { RootState } from "typesafe-actions";

export interface IAppProps {
  hideLoader: () => void;
}

const App = ({ hideLoader }: IAppProps) => {
  const [allTrips, setAllTrips] = useState<[]>([]);
  const [TripsTitle, setTripsTitle] = useState<string>("");

  let list = [];
  list = useSelector((state: RootState) => state.list);

  const dispatch = useDispatch();

  useEffect(() => {
   
    async function fetchData() {
      console.log(await getTrip());
      const temp = await getTrip();
      const { GroupName, Promotions } = temp[0];
      setAllTrips(Promotions);
      setTripsTitle(GroupName);
      dispatch({ type: "ADD_LIST", list: Promotions });
      hideLoader();
    }
    fetchData();
  }, [hideLoader]);

  return (
    <div className="App">
      <Header title={TripsTitle} />
      <main>
        <Filter allTrips={allTrips} />
        <TripList allTrips={list} />
      </main>
    </div>
  );
};
export default App;
