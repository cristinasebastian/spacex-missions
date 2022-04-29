import { useState, useEffect } from 'react';
import logo from './assets/logo-spacex.png';
import * as API from './services/launches';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
    <img src={logo} class="m-4 w-72" />
      <h1 class="m-4 text-3xl font-bold">SpaceX Launches</h1>
      <section>
        {launches.map(launch =>(
          <div key={`${launch.flight_number}_${launch.mission_name}`} class="p-4 mt-1 mx-1 w-1/2 flex flex-col rounded-lg dark:bg-gray-100">
            <div>
              <p class="text-2xl">
                Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
              </p>
              <div class="flex justify-between">
                <div>
                  {launch.mission_name} ({launch.launch_year})
                </div>
                <div class={`w-20 h-7 text-center font-bold ${launch.launch_success ? "rounded-lg dark:bg-green-200 dark:text-green-800" : "rounded-lg dark:bg-red-200 dark:text-red-800"} `}>
                  {launch.launch_success ? "Success" : "Failure"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
