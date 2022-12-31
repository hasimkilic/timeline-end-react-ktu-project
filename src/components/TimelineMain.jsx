import React from "react";

const TimelineMain = ({ dates, months, daysBetween, classListt }) => {
  return (
    <div>
      <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
        {dates.map((item, index) => {
          return (
            <div className="md:contents grid grid-cols-1" key={index}>
              <div style={{ display: "none" }}>
                {daysBetween(item[0]?.firstDate)}
              </div>
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div
                    className={`${daysBetween(item[0]?.firstDate).slice(
                      0,
                      1
                    )} h-full w-1`}
                  ></div>
                </div>
                <div
                  className={`${daysBetween(item[0]?.firstDate).slice(
                    0,
                    1
                  )} w-6 h-6 absolute top-1/2  rounded-full shadow text-center`}
                >
                  <span className="icon material-symbols-outlined text-white font-bold">
                    {daysBetween(item[0]?.firstDate).slice(0, 1)}
                  </span>
                </div>
              </div>
              <div className="bg-[#fff] text-[#003b64] border col-start-4 col-end-12 p-4 rounded-xl relative my-4 mr-auto shadow-md w-[90%]">
                <a
                  href={item[0]?.url}
                  className="cursor-pointer font-semibold sm:text-md md:text-lg text-md mb-3 mr-auto flex hover:text-[#003b64] justify-content-start items-start"
                >
                  <span className="material-symbols-outlined mr-1">
                    arrow_right_alt
                  </span>
                  {item[0].title}
                </a>
                {item[1]?.title == null ? (
                  classListt
                ) : (
                  <a
                    href={item[1]?.url}
                    className="cursor-pointer font-semibold sm:text-md md:text-lg text-md mb-3 mr-auto flex hover:text-[#003b64] justify-content-start items-start"
                  >
                    <span className="material-symbols-outlined mr-1">
                      arrow_right_alt
                    </span>
                    {item[1]?.title}
                  </a>
                )}
                {item[2]?.title == null ? (
                  classListt
                ) : (
                  <a
                    href={item[2]?.url}
                    className="cursor-pointer font-semibold sm:text-md md:text-lg text-md mb-3 mr-auto flex hover:text-[#003b64] justify-content-start items-start"
                  >
                    <span className=" material-symbols-outlined mr-1">
                      arrow_right_alt
                    </span>
                    {item[2]?.title}
                  </a>
                )}
                {item[3]?.title == null ? (
                  classListt
                ) : (
                  <a
                    href={item[3]?.url}
                    className="cursor-pointer font-semibold sm:text-md md:text-lg text-md mb-3 mr-auto flex hover:text-[#003b64] justify-content-start items-start"
                  >
                    <span className="material-symbols-outlined mr-1">
                      arrow_right_alt
                    </span>
                    {item[3]?.title}
                  </a>
                )}
                {item[4]?.title == null ? (
                  classListt
                ) : (
                  <a
                    href={item[4]?.url}
                    className="cursor-pointer font-semibold sm:text-md md:text-lg text-md mb-3 mr-auto flex hover:text-[#003b64] justify-content-start items-start"
                  >
                    <span className="material-symbols-outlined mr-1">
                      arrow_right_alt
                    </span>
                    {item[4]?.title}
                  </a>
                )}
                <p
                  className={`${daysBetween(item[0]?.firstDate).slice(
                    2,
                    3
                  )} ${daysBetween(item[0]?.firstDate).slice(
                    0,
                    1
                  )} bg-gray-600 text-white font-normal leading-tight mt-4 text-justify w-full md:text-[1rem] text-sm shadow-lg inline p-2 rounded-md`}
                >
                  {item[0]?.firstDate.toString().split("/")[2]}
                  <span className="ml-1">
                    {months[item[0]?.firstDate.toString().split("/")[1] - 1]}{" "}
                  </span>
                  <span className="font-normal">
                    {item[0]?.endDate === null ? item[0]?.endDate === " " : "/"}{" "}
                    {item[0]?.endDate === null
                      ? ""
                      : item[0]?.endDate.toString().split("/")[2]}
                    <span className="ml-1">
                      {item[0]?.endDate === null
                        ? ""
                        : months[item[0]?.endDate.toString().split("/")[1] - 1]}
                    </span>
                  </span>
                </p>
                <span className="absolute flex items-center pt-2 bottom-1 right-2 justify-end text-xs text-gray-500">
                  {daysBetween(item[0]?.firstDate).slice(1, 2)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineMain;
