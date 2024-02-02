import React, { useState } from 'react'
import "./UploadCSV.css";
let initialData=[  {
    "id": 1,
    "links": "timesonline.co.uk",
    "prefix": "QB0GaK7",
    "select_tags": [
      "Technology",
      "Fashion",
      "Food",
      
    ]
  },
  {
    "id": 2,
    "links": "merriam-webster.com",
    "prefix": "8oUTDyz",
    "select_tags": [
      
      "Music",
      "Art",
     
    ]
  },
  {
    "id": 3,
    "links": "newyorker.com",
    "prefix": "Z9i2o9o",
    "select_tags": [
      "Travel",
      "Finance"
    ]
  },
  {
    "id": 4,
    "links": "angelfire.com",
    "prefix": "pW44f49",
    "select_tags": [
    
      "Fashion",

      "Travel",
    
      "Music",
   
      "Health",
     
   
    ]
  },
  {
    "id": 5,
    "links": "rambler.ru",
    "prefix": "w1vDJvP",
    "select_tags": [
      "Technology",
      "Fashion",
      "Food",
  
    ]
  },
  {
    "id": 6,
    "links": "timesonline.co.uk",
    "prefix": "Uz3Uq87",
    "select_tags": [
      "Technology",
      "Fashion",
      "Food",
      "Travel",
  
    ]
  },
  {
    "id": 7,
    "links": "state.gov",
    "prefix": "PwT2wMc",
    "select_tags": [
      "Technology",
      "Fashion",
      "Food",
   
    ]
  },
  {
    "id": 8,
    "links": "youtube.com",
    "prefix": "c1TO1x6",
    "select_tags": [
     
      "Sports",
      "Music",
      
    ]
  },
  {
    "id": 9,
    "links": "washingtonpost.com",
    "prefix": "4KtfXaU",
    "select_tags": [
      "Technology",
      "Fashion",
     
     
    ]
  },
  {
    "id": 10,
    "links": "icq.com",
    "prefix": "nh294Ty",
    "select_tags": [
      "Technology",
      "Fashion",
      "Food",
      "Travel",
      "Sports",
      "Music",
      "Art",
      "Health",
      "Education",
      "Finance"
    ]
  }]
function Tables() {
    const [data, setData] = useState(initialData);

    const handleRemoveTag = (index, tag) => {
      const newData = [...data];
      newData[index].select_tags = newData[index].select_tags.filter(t => t !== tag);
      setData(newData);
    };
  
    const handleAddTag = (index, event) => {
      const tag = event.target.value;
      if (tag !== "") {
        const newData = [...data];
        newData[index].select_tags.push(tag);
        setData(newData);
      }
    };
  
    return (
      <>
        <div className='uploads'>
          <div>Uploads</div>
          <div className='table-container'>
          <div className='tableMain'>
            <table>
              <thead>
                <tr>
                  <th>SI No.</th>
                  <th>Links</th>
                  <th>Prefix</th>
                  <th>Add Tags</th>
                  <th>Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.links}</td>
                    <td>{item.prefix}</td>
                    <td>
                      <select onChange={(e) => handleAddTag(index, e)}>
                        <option value="">Select Tags</option>
                        <option value="Technology">Technology</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Sports">Sports</option>
                        <option value="Music">Music</option>
                        <option value="Art">Art</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                        <option value="Finance">Finance</option>
                      </select>
                    </td>
                    <td>
                      {item.select_tags.map((tag, idx) => (
                        <span key={idx} className="selected-tag">
                          {tag} <button onClick={() => handleRemoveTag(index, tag)}>X</button>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='optional'>
        <img src="https://i.ibb.co/CHsZ6XW/optional.png" alt="img" />
      </div>
    </>
  );
}

export default Tables;