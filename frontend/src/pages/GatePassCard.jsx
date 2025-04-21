import QRCode from 'react-qr-code';

const GatePassCard = () => {
  const user = {
    name: 'John Doe',
    type: 'Single Visitor Temporary Pass',
    status: 'Pending',
    port: 'JAFZA',
    company: 'DP World',
    purpose: 'Business Meeting',
    host: 'Abdul Rehman',
    rcn: 'DYZ - 2345',
    qrValue: 'ASD110055',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg', // Replace with your image
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold mb-1">Your Gate Pass Issued</h2>
      <p className="text-gray-600 text-sm mb-6">You will be notified once your request is approved</p>

      <div className="bg-gray-100 rounded-xl p-4 w-full max-w-md shadow-md">
        {/* Top Section */}
        <div className="flex items-center gap-4 mb-4">
          <img src={user.photo} alt="User" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.type}</p>
          </div>
        </div>

        {/* Status Row */}
        <div className="flex justify-between text-sm mb-4 border-b pb-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span className="text-gray-700">Status: {user.status}</span>
          </div>
          <span>Issue Date</span>
          <span>Valid till</span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-y-4 text-sm mb-4">
          <div>
            <p className="text-gray-500">Port</p>
            <p className="font-medium">{user.port}</p>
          </div>
          <div>
            <p className="text-gray-500">Company</p>
            <p className="font-medium">{user.company}</p>
          </div>
          <div>
            <p className="text-gray-500">Purpose</p>
            <p className="font-medium">{user.purpose}</p>
          </div>
          <div>
            <p className="text-gray-500">Host Name</p>
            <p className="font-medium">{user.host}</p>
          </div>
        </div>

        {/* QR & RCN */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-gray-500 text-sm">RCN Number</p>
            <p className="font-semibold">{user.rcn}</p>
          </div>
          <div className="flex flex-col items-center">
            <QRCode value={user.qrValue} size={64} />
            <p className="text-xs mt-1">{user.qrValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatePassCard;
