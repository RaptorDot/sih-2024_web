import React from "react";

export default function ArticlePage({prop}) {
  console.log(prop)
  return (
    <div>
      <div className="intro-text p-[20px] bg-[#eee] text-[1.2rem] items-center">
        <p>Let's Save Water!</p>
      </div>
      <div className="content-container flex flex-[1] overflow-hidden ">
        <div className="side left-side flex-[3] border-r-[2px_solid_#ccc] overflow-y-auto">
          <div className="content">
            <h2>Steps of Rainwater Harvesting</h2>
            <p>Water Conservation Techniques</p>
            <ul>
              <li>
                <a href="#1">Choose the Right Location for Collection</a>
              </li>
              <li>
                <a href="#2">Install Gutters and Downspouts</a>
              </li>
              <li>
                <a href="#3">Set Up a First Flush Diverter</a>
              </li>
              <li>
                <a href="#4">Select a Storage Tank or Barrel</a>
              </li>
              <li>
                <a href="#5">Connect the Downspout to the Tank</a>
              </li>
              <li>
                <a href="#6">Install a Filter</a>
              </li>
              <li>
                <a href="#7">Set Up an Overflow System</a>
              </li>
              <li>
                <a href="#8">Add a Tap for Easy Access</a>
              </li>
              <li>
                <a href="#9">Regularly Maintain the System</a>
              </li>
              <li>
                <a href="#10">Use the Harvested Water Wisely</a>
              </li>
            </ul>
            {/* <p>Agricultural Water Management</p>
          <ul>
              <li>Soil Moisture Conservation</li>
              <li>Crop Selection for Water Efficiency</li>
              <li>Irrigation Scheduling</li>
          </ul> */}
          </div>
        </div>
        <div className="side right-side flex-[7]">
          <div className="content h-[150vh]">
            <h2 id={1}>Choose the Right Location for Collection</h2>
            <p>
              Identify a flat, open area on your roof where rainwater can be
              easily collected. Avoid areas near trees to minimize debris.
            </p>
            <img
              src="images/upload_img_56984815_09_03_2024_10_36_02_907145_1072850073448888857.jpeg"
              alt="A description of my photo "
              className="fixed-size w-[700px] justify-center"
            />
            <h2 id={2}>2. Install Gutters and Downspouts</h2>
            <p>
              Attach gutters along the edge of your roof to channel rainwater
              into downspouts. Ensure they are securely fastened and angled
              properly.
            </p>
            <img
              src="images/genai_m4_ncg_ftw_v3_upload_img_69533913_09_03_2024_10_46_14_913151_5920287439826346867.jpeg"
              alt="A description of my photo "
              className="fixed-size w-[700px] justify-center"
            />
            <h2 id={3}>3. Set Up a First Flush Diverter</h2>
            <p>
              Install a first flush diverter to remove the initial runoff, which
              often contains dirt and debris. This helps in collecting cleaner
              water.
            </p>
            <h2 id={4}>4. Select a Storage Tank or Barrel</h2>
            <p>
              Choose a durable, food-grade tank or barrel to store the water.
              Make sure it has a lid to keep out contaminants.
            </p>
            <img
              src="images/upload_img_37292576_09_03_2024_10_50_50_806260_902340545408008694.jpeg"
              alt="A description of my photo "
              height={700}
              width={600}
            />
            <h2 id={5}>5. Connect the Downspout to the Tank</h2>
            <p>
              Use a pipe to connect the downspout to your storage tank. Ensure
              the connection is secure and sealed to prevent leaks.
            </p>
            <img
              src="images/rainwater-harvesting-system.jpg"
              alt="A description of my photo "
              className="fixed-size w-[700px] justify-center"
            />
            <h2 id={6}>6. Install a Filter</h2>
            <p>
              Place a mesh filter at the tank’s inlet to keep out leaves and
              other debris. Regularly clean or replace the filter to maintain
              water quality.
            </p>
            <img
              src="images/hq720.jpg"
              alt="A description of my photo "
              className="fixed-size w-[700px] justify-center"
            />
            <h2 id={7}>7. Set Up an Overflow System</h2>
            <p>
              Install an overflow pipe to direct excess water away from your
              home when the tank is full. Consider directing it to your garden
              or a secondary tank.
            </p>
            <img
              src="images/water-overflowing-from-a-nearby-lake-EMNW4W.jpg"
              alt="A description of my photo "
              className="fixed-size w-[700px] justify-center"
            />
            <h2 id={8}>8. Add a Tap for Easy Access</h2>
            <p>
              Attach a tap near the bottom of the tank for easy access to the
              stored water. Make sure the tap is sturdy and leak-proof.
            </p>
            <img
              src="images/aid6097647-v4-728px-Clean-a-Plastic-Water-Tank-Step-14-Version-3.jpg"
              alt="A description of my photo "
              height={600}
              width={700}
            />
            <h2 id={9}>9. Regularly Maintain the System</h2>
            <p>
              Clean the gutters, filter, and tank periodically to ensure
              efficient water collection and prevent contamination.
            </p>
            <img
              src="images/aid6097647-v4-728px-Clean-a-Plastic-Water-Tank-Step-7-Version-3.jpg"
              alt="A description of my photo "
              height={500}
              width={700}
            />
            <h2 id={10}>10. Use the Harvested Water Wisely</h2>
            <p>
              Utilize the collected water for gardening, washing, and other
              non-potable uses to maximize conservation.
            </p>
            <img
              src="images/genai_m4_rva_frc_v3_upload_img_96565248_09_03_2024_11_17_51_918806_4356694918902650371.jpeg"
              alt="A description of my photo "
              height={600}
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
