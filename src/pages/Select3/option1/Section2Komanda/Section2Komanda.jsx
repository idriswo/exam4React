import axios from 'axios';
import { memo, useState , useEffect } from 'react'
import API_URL from '../../../../config/api.js'
const url = `${API_URL}/teamData`
const Section2Komanda = memo(() => {

  const [team, setTeam] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredTeam, setFilteredTeam] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    image: ''
  });

  const getTeam = async () => {
    try {
      const res = await axios.get(url);
      setTeam(res.data);
      setFilteredTeam(res.data);
    } catch (error) {
      console.error("Ошибка при получении команды:", error);
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
    const filtered = team.filter((member) =>
      member.name.toLowerCase().includes(value.toLowerCase()) ||
      member.position.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTeam(filtered);
  };

  const handleAddClick = () => {
    setEditingId(null);
    setFormData({ name: '', position: '', image: '' });
    setShowForm(true);
  };

  const handleEditClick = (member) => {
    setEditingId(member.id);
    setFormData({
      name: member.name,
      position: member.position,
      image: member.image
    });
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (editingId) {
        await axios.put(`${url}/${editingId}`, formData);
      } else {
        await axios.post(url, formData);
      }
      await getTeam();
      setShowForm(false);
      setFormData({ name: '', position: '', image: '' });
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      await getTeam();
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  return (
    <>
      <div className='bg-gradient-to-b from-[#EFA359] to-[#f0a662] xl:max-w-[1560px] xl:m-auto xl:h-auto xl:my-[150px] xl relative z-20 py-[40px]'>
        <div className='xl:m-auto xl:max-w-[1300px] bg-white border-none rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] z-30 relative top-0'>
          
          <div className="w-full p-[32px] flex justify-between items-center gap-6 bg-gradient-to-r from-white to-gray-50 font-sans flex-wrap rounded-t-[12px] border-b-[2px] border-[#EFA359]">
            <div className="flex-1 min-w-[200px] relative">
              <span className="absolute left-[16px] top-[50%] translate-y-[-50%] text-[#EFA359] text-[18px]">🔍</span>
              <input
                type="text"
                placeholder="Поиск по имени или должности..."
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-[44px] pr-[16px] py-[14px] border-[2px] border-[#EFA359] rounded-[8px] focus:outline-none focus:border-[#f0a662] focus:shadow-[0_0_0_4px_rgba(239,163,89,0.1)] font-sans text-[16px] transition-all durati on-300"
              />
            </div>
            <button
              onClick={handleAddClick}
              className="px-[32px] py-[14px] bg-gradient-to-r from-[#f0a662] to-[#EFA359] text-white font-bold text-[16px] cursor-pointer border-none hover:shadow-[0_8px_20px_rgba(239,163,89,0.4)] transition-all duration-300 rounded-[8px] transform hover:scale-105 whitespace-nowrap"
            >
              ✨ Добавить участника
            </button>
          </div>

          {showForm && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
              <div className="bg-white p-[40px] rounded-[16px] max-w-[500px] w-full shadow-[0_30px_80px_rgba(0,0,0,0.3)] animate-in">
                <h2 className="text-[28px] font-bold mb-[32px] bg-gradient-to-r from-[#f0a662] to-[#EFA359] bg-clip-text text-transparent">
                  {editingId ? '✏️ Редактировать' : '➕ Добавить'} участника
                </h2>
                <div className="flex flex-col gap-[20px]">
                  <div>
                    <label className="text-[14px] font-bold block mb-[10px] text-gray-700">Имя</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Введите имя..."
                      className="w-full px-[16px] py-[14px] border-[2px] border-gray-200 rounded-[8px] focus:outline-none focus:border-[#f0a662] focus:shadow-[0_0_0_4px_rgba(239,163,89,0.1)] font-sans text-[16px] transition-all duration-300 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="text-[14px] font-bold block mb-[10px] text-gray-700">Должность</label>
                    <textarea
                      name="position"
                      value={formData.position}
                      onChange={handleFormChange}
                      placeholder="Введите должность..."
                      className="w-full px-[16px] py-[14px] border-[2px] border-gray-200 rounded-[8px] focus:outline-none focus:border-[#f0a662] focus:shadow-[0_0_0_4px_rgba(239,163,89,0.1)] font-sans resize-none bg-gray-50 transition-all duration-300"
                      rows="3"
                    />
                  </div>
                  <div>
                    <label className="text-[14px] font-bold block mb-[10px] text-gray-700">Ссылка на изображение</label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleFormChange}
                      placeholder="Введите URL изображения..."
                      className="w-full px-[16px] py-[14px] border-[2px] border-gray-200 rounded-[8px] focus:outline-none focus:border-[#f0a662] focus:shadow-[0_0_0_4px_rgba(239,163,89,0.1)] font-sans text-[16px] transition-all duration-300 bg-gray-50"
                    />
                  </div>
                  <div className="flex gap-[16px] mt-[32px]">
                    <button
                      onClick={handleSave}
                      className="flex-1 px-[24px] py-[14px] bg-gradient-to-r from-[#f0a662] to-[#EFA359] text-white font-bold text-[16px] cursor-pointer border-none hover:shadow-[0_8px_20px_rgba(239,163,89,0.4)] transition-all duration-300 rounded-[8px] transform hover:scale-105"
                    >
                      ✓ Сохранить
                    </button>
                    <button
                      onClick={() => setShowForm(false)}
                      className="flex-1 px-[24px] py-[14px] bg-gray-100 border-[2px] border-gray-300 text-gray-700 font-bold text-[16px] cursor-pointer hover:bg-gray-200 transition-all duration-300 rounded-[8px]"
                    >
                      ✕ Отмена
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full p-[40px] flex justify-center bg-white font-sans flex-wrap rounded-b-[12px]">
            <div className="flex flex-col md:flex-row flex-wrap gap-[50px] max-w-[1300px] justify-center">
              {filteredTeam.length > 0 ? (
                filteredTeam.map((member) => (
                  <div key={member.id} className="flex flex-col w-[500px] md:w-[340px] group cursor-default">
                    <div className="relative w-full h-[460px] overflow-hidden rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-[12px] right-[12px] flex gap-[8px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                        <button
                          onClick={() => handleEditClick(member)}
                          className="bg-gradient-to-r from-[#f0a662] to-[#EFA359] hover:shadow-[0_6px_16px_rgba(239,163,89,0.4)] text-white px-[14px] py-[10px] font-bold text-[13px] cursor-pointer border-none transition-all duration-300 rounded-[6px] transform hover:scale-110"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(member.id)}
                          className="bg-red-500 hover:bg-red-600 hover:shadow-[0_6px_16px_rgba(239,0,0,0.3)] text-white px-[14px] py-[10px] font-bold text-[13px] cursor-pointer border-none transition-all duration-300 rounded-[6px] transform hover:scale-110"
                        >
                          🗑️
                        </button>
                      </div>
                      
                      <div className="absolute bottom-[24px] left-[50%] translate-x-[-50%] w-[85%] bg-white py-[20px] px-[16px] text-center rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transform group-hover:translate-y-[-10px] transition-transform duration-300">
                        <h3 className="text-[20px] font-bold text-gray-900 m-[0px] mb-[8px]">
                          {member.name}
                        </h3>
                        <p className="text-[14px] text-gray-600 m-[0px] leading-[1.4] whitespace-pre-line">
                          {member.position}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-[12px] mt-[16px] w-full">
                      <button className="flex-1 bg-gradient-to-r from-[#f0a662] to-[#EFA359] text-white font-bold text-[15px] py-[14px] border-none cursor-pointer hover:shadow-[0_8px_20px_rgba(239,163,89,0.4)] transition-all duration-300 rounded-[8px] transform hover:scale-105">
                        💬 Написать
                      </button>
                      <button className="flex-1 bg-white border-[2px] border-[#f0a662] text-gray-900 font-bold text-[15px] py-[14px] cursor-pointer hover:bg-gray-50 hover:shadow-[0_8px_20px_rgba(239,163,89,0.2)] transition-all duration-300 rounded-[8px] transform hover:scale-105">
                        ⭐ Отзыв
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-[60px]">
                  <p className="text-[20px] text-gray-400 mb-[16px]">😔</p>
                  <p className="text-[18px] text-gray-500 font-medium">Членов команды не найдено</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default Section2Komanda