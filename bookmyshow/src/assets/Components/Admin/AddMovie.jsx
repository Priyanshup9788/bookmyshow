import React from 'react'

const AddMovie = () => {
    return (
        <div class="form-container">
            <h2>Add Movie</h2>
            <form action="#" method="POST">
                <div class="mb-3">
                    <label for="name" class="form-label">Movie Name</label>
                    <input type="text" class="form-control" id="name" name="name" required />
                </div>
                
                <div class="mb-3">
                    <label for="inquiry" class="form-label">dimension</label>
                    <select class="form-select" id="inquiry" name="dimension" required>
                        <option value="">Select an option</option>
                        <option value="2D">2D</option>
                        <option value="3D">3D</option>
                    </select>
                </div>
                <div className="d-flex gap-2">
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="Gujrati" id="subscribe" name="Language" />
                    <label class="form-check-label" for="subscribe">
                        Gujrati
                    </label>
                </div>
              
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="Hindi" id="subscribe" name="Language" />
                    <label class="form-check-label" for="subscribe">
                        Hindi
                    </label>
                    
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="English" id="subscribe" name="Language" />
                    <label class="form-check-label" for="subscribe">
                        English
                    </label>
                </div>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Description</label>
                    <textarea class="form-control" id="message" name="description" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn btn-pink w-100">Submit</button>
            </form>
        </div>
    )
}

export default AddMovie