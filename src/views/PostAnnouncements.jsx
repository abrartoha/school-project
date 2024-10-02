import React, { useState } from 'react';
import { classes } from '../../src/data/data.js';
import { announcements as initialAnnouncements } from '../../src/data/data.js'; // Assuming this is your initial data

export default function PostAnnouncements() {
    const [allSelected, setAllSelected] = useState(false);
    const [selectedItems, setSelectedItems] = useState(new Array(classes.length).fill(false)); // Array to track individual selections
    const [title, setTitle] = useState(''); // State for the title input
    const [description, setDescription] = useState(''); // State for the description input
    const [announcements, setAnnouncements] = useState(initialAnnouncements); // State for announcements

    // Handle the "Select All" checkbox change
    const handleSelectAllChange = () => {
        setAllSelected((prev) => !prev);
        setSelectedItems(new Array(classes.length).fill(!allSelected)); // Select/Deselect all based on the new state
    };

    // Handle individual checkbox change
    const handleCheckboxChange = (index) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = !newSelectedItems[index]; // Toggle the selected state of the individual checkbox
        setSelectedItems(newSelectedItems);
        setAllSelected(newSelectedItems.every((item) => item)); // Update allSelected based on individual selections
    };

    // Handle posting the announcement
    const handlePostAnnouncement = () => {
        if (title.trim() === '' || description.trim() === '') {
            alert('Please fill in both title and description.'); // Simple validation
            return;
        }

        const newAnnouncement = {
            title: title,
            description: description,
            selectedClasses: classes.filter((_, index) => selectedItems[index]) // Get selected classes
        };

        setAnnouncements((prevAnnouncements) => [...prevAnnouncements, newAnnouncement]); // Add the new announcement
        setTitle(''); // Clear title input
        setDescription(''); // Clear description input
        setSelectedItems(new Array(classes.length).fill(false)); // Reset selected items
        setAllSelected(false); // Reset "Select All" checkbox
    };

    return (
        <div className='ps-5 mx-auto bg-light rounded-bottom'>
            <h3 className="h3 mt-5">Announcements</h3>
            <div className="card w-25" style={{ height: '20rem', overflowY: 'auto' }}>
                <div className="card-body">
                    <h5 className="h5">Select class</h5>
                    <ul className="list-group list-group-flush">
                        <li className='list-group-item'>
                            <div className="form-check">
                                <input
                                    className="form-check-input mx-2"
                                    type="checkbox"
                                    id="SelectAll"
                                    checked={allSelected}
                                    onChange={handleSelectAllChange}
                                />
                                <label className="form-check-label" htmlFor="SelectAll">Select All</label>
                            </div>
                        </li>
                        {classes.map((item, index) => (
                            <li className='list-group-item' key={index}>
                                <div className="form-check">
                                    <input
                                        className="form-check-input mx-2"
                                        type="checkbox"
                                        id={`class-${index}`}
                                        value={item}
                                        checked={selectedItems[index]} // Bind checked state to individual selection
                                        onChange={() => handleCheckboxChange(index)} // Handle individual checkbox change
                                    />
                                    <label className="form-check-label" htmlFor={`class-${index}`}>{item}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <h5 className='h5 mt-2'>Add title</h5>
            <div className="form-floating mb-3 w-50">
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Announcement title"
                    value={title} // Bind title input to state
                    onChange={(e) => setTitle(e.target.value)} // Update title state
                />
                <label htmlFor="title">Announcement title</label>
            </div>
            <h5 className='h5 mt-2'>Add description</h5>
            <div className="form-floating my-3 w-50">
                <textarea
                    className="form-control"
                    placeholder="Enter announcement details"
                    id="details"
                    style={{ height: '100px' }}
                    value={description} // Bind description input to state
                    onChange={(e) => setDescription(e.target.value)} // Update description state
                ></textarea>
                <label htmlFor="details">Add description</label>
            </div>
            <button className='btn btn-success' onClick={handlePostAnnouncement}>Post Announcement</button>
        </div>
    );
}
