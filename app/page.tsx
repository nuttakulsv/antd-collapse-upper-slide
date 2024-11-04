'use client';

import { theme, Table } from 'antd';
import type { CollapseProps } from 'antd';
import { UpwardCollapse } from '@/components/UpwardCollapse';

const dogData = [
  {
    key: '1',
    breed: 'Golden Retriever',
    origin: 'Scotland',
    lifespan: '10-12 years',
    temperament: 'Friendly, Intelligent',
    weight: '25-34 kg',
  },
  {
    key: '2',
    breed: 'German Shepherd',
    origin: 'Germany',
    lifespan: '9-13 years',
    temperament: 'Loyal, Confident',
    weight: '22-40 kg',
  },
  {
    key: '3',
    breed: 'Siberian Husky',
    origin: 'Siberia',
    lifespan: '12-14 years',
    temperament: 'Outgoing, Mischievous',
    weight: '20-27 kg',
  },
  {
    key: '4',
    breed: 'Labrador Retriever',
    origin: 'Canada',
    lifespan: '10-12 years',
    temperament: 'Gentle, Outgoing',
    weight: '25-36 kg',
  },
  {
    key: '5',
    breed: 'Poodle',
    origin: 'France',
    lifespan: '12-15 years',
    temperament: 'Intelligent, Active',
    weight: '20-32 kg',
  },
];

const columns = [
  {
    title: 'Breed',
    dataIndex: 'breed',
    key: 'breed',
  },
  {
    title: 'Origin',
    dataIndex: 'origin',
    key: 'origin',
  },
  {
    title: 'Lifespan',
    dataIndex: 'lifespan',
    key: 'lifespan',
  },
  {
    title: 'Temperament',
    dataIndex: 'temperament',
    key: 'temperament',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
];

const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '🐕 About Dogs',
    children: (
      <div>
        <p className="mb-4">{text}</p>
        <Table 
          dataSource={dogData} 
          columns={columns} 
          pagination={false}
          className="mb-4"
          size="middle"
          bordered
        />
      </div>
    ),
  },
  {
    key: '2',
    label: '🐈 About Cats',
    children: <p>Cats are graceful, independent creatures that have been companions to humans for thousands of years. They are known for their agility, hunting skills, and affectionate nature.</p>,
  },
  {
    key: '3',
    label: '🦜 About Birds',
    children: <p>Birds are fascinating creatures that can fly through the air with incredible precision. They come in a wide variety of species, each with its own unique characteristics and behaviors.</p>,
  },
];

export default function Home() {
  const { token } = theme.useToken();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Pet Information Center
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <UpwardCollapse
            items={items}
            defaultActiveKey={['1']}
            style={{
              background: token.colorBgContainer,
            }}
          />
        </div>
        
        <p className="text-center text-gray-600 mt-8">
          Click on each section to learn more about different pets
        </p>
      </div>
    </div>
  );
}