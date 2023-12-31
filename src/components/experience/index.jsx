import { openInNewTab, skeleton } from '../../helpers/utils';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../layout/card';
import dataConfig from '../../../data.configs';
import { useLoadData } from '../../helpers/useLoadData';
import { CardContent, CardTitle } from '../layout/card/card-components';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BtnIcon } from '../buttons/btn-icon';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const ListItem = ({ time, position, company, companyLink }) => (
  <li className="mb-5 ml-4 grid grid-cols-5 ">
    <div className="col-span-4">
      <div
        className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
        style={{ left: '-4.5px' }}
      ></div>
      <div className="my-0.5 text-xs">{time}</div>
      <h3 className="font-semibold">{position}</h3>
      <div className="mb-4 font-normal">
        <a href={companyLink} target="_blank" rel="noreferrer">
          {company}
        </a>
      </div>
    </div>
  </li>
);

export const Experience = ({ loading, data }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          position={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ width: 'w-6/12', height: 'h-3' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {!loading && data?.length !== 0 && (
        <Card cardId="experiences">
          <div className="flex justify-between ">
            <CardTitle text={'Experience'} loading={loading} />
            <span className="flex justify-start items-center mr-3 pt-3">
              <span className="text-slate-300 pr-1">More on:</span>
              <BtnIcon
                onClick={() => openInNewTab(dataConfig.links.linkedin)}
                size={'medium'}
              >
                <FaLinkedin />
              </BtnIcon>
            </span>
          </div>
          <CardContent>
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4 w-full">
              {loading ? (
                renderSkeleton()
              ) : (
                <>
                  {data.map((experience, index) => (
                    <ListItem
                      key={index}
                      time={`${experience.from} - ${experience.to}`}
                      position={experience.position}
                      company={experience.company}
                      companyLink={
                        experience.companyLink ? experience.companyLink : null
                      }
                    />
                  ))}
                </>
              )}
            </ol>
          </CardContent>
        </Card>
      )}
    </>
  );
};

ListItem.propTypes = {
  time: PropTypes.node,
  position: PropTypes.node,
  company: PropTypes.node,
  companyLink: PropTypes.string,
};

Experience.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
};
