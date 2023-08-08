import { RiPhoneFill, RiMailFill } from 'react-icons/ri';
import {} from 'react';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import { Card } from '../layout/card';
import { CardContent, CardTitle } from '../layout/card/card-components';
import { BtnSimple } from '../buttons/btn-simple';
import { BaseIcon } from '../icons/base-icon';

const ListItem = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start px-1 items-center"
    >
      <div className="flex-grow font-medium gap-2 flex items-center my-1">
        <BaseIcon size={'small'}>{icon}</BaseIcon> {title}
      </div>
      <div
        className={`${
          skeleton ? 'flex-grow' : ''
        } text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}
        style={{
          wordBreak: 'break-word',
        }}
      >
        {value}
      </div>
    </a>
  );
};
const Contact = ({ loading, data }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ width: 'w-4', height: 'h-4' })}
          title={skeleton({ width: 'w-24', height: 'h-4' })}
          value={skeleton({ width: 'w-full', height: 'h-4' })}
        />
      );
    }

    return array;
  };

  return (
    <>
      {!loading && (
        <Card cardId={'details'}>
          <div className="text-base-content text-opacity-60">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                <CardTitle text={'Contact'} loading={loading} />
                <CardContent>
                  <div className="w-full h-full">
                    {data.phone && (
                      <ListItem
                        icon={<RiPhoneFill />}
                        title="Phone:"
                        value={data.phone}
                        link={`tel:${data.phone}`}
                      />
                    )}
                    {data.email && (
                      <ListItem
                        icon={<RiMailFill />}
                        title="Email:"
                        value={data.email}
                        link={`mailto:${data.email}`}
                      />
                    )}
                  </div>
                </CardContent>
              </>
            )}
          </div>
          <div className="mx-5 grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Company
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div className="col-span-2 mx-auto mb-5">
              <BtnSimple title={'Send'} />
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

ListItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.node,
  value: PropTypes.node,
  link: PropTypes.string,
  skeleton: PropTypes.bool,
};

Contact.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default Contact;
