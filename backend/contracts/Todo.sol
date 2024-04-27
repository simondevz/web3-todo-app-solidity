// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract Todo {
    address admin;
    uint256 salt;

    struct task {
        uint16 id;
        bytes text;
        uint16 category_id;
        bool done;
        uint256 timeStamp;
    }

    struct category {
        uint16 id;
        bytes name;
        bytes text_color;
        bytes bg_color;
    }

    mapping (address => category[]) public categories;
    mapping (address => uint16[]) public taskIds;
    mapping (address => mapping (uint => task)) public tasks;

    event LogCategory(uint16 taskCategoryId);

    constructor () {
        admin = msg.sender;
        salt = 1;
    }

    function _generateId() private returns (uint16) {
        uint256 id = uint256(keccak256(abi.encodePacked(salt, block.timestamp, block.difficulty)));
        salt = salt + 1;
        return uint16(id);
    }

    function createCategory(string memory name, string memory text_color, string memory bg_color) public returns (category memory addedCategory) {
        require(bytes(name).length <= 25, "Category name too long");
        require(bytes(text_color).length <= 25, "Color too long. Use it's hex value");
        require(bytes(bg_color).length <= 25, "Color name too long.  Use it's hex value");
        require(msg.sender != address(0), "Address cannot be zero");

        addedCategory = category({
            id : _generateId(), 
            name : bytes(name), 
            text_color : bytes(text_color), 
            bg_color : bytes(bg_color)
        });
        categories[msg.sender].push(addedCategory);
        return addedCategory;
    }

    function getCategories() public view returns (category[] memory categoryList) {
        require(msg.sender != address(0), "Address cannot be zero");
        categoryList = categories[msg.sender];
        return categoryList;
    }

    function createTask(string memory text, uint16 category_id) public returns (task memory newTask) {
        require(bytes(text).length <= 150, "Task too long");
        require(msg.sender != address(0), "Address cannot be zero");

        // Check that category exists
        uint16 taskCategoryId = categories[msg.sender][category_id].id;
        require(taskCategoryId != category_id, "Task category not found");

        newTask = task({
            id : _generateId(), 
            text : bytes(text), 
            category_id : category_id, 
            done : false, 
            timeStamp : block.timestamp
        });
        tasks[msg.sender][category_id] = newTask;
        taskIds[msg.sender].push(newTask.id);
        return newTask;
    }

    function getTasks() public view returns (task[] memory taskList) {
        require(msg.sender != address(0), "Address cannot be zero");
        taskList = new task[](taskIds[msg.sender].length);

        for (uint256 i = 0; i < taskIds[msg.sender].length; i++) {
            taskList[i] = tasks[msg.sender][taskIds[msg.sender][i]]; 
        }
        return taskList;
    }

    function getDoneTasks() public view returns (task[] memory taskList) {
        require(msg.sender != address(0), "Address cannot be zero");
        uint256 j = 0;
        for (uint256 i = 0; i < taskIds[msg.sender].length; i++) {
            task memory tempTask = tasks[msg.sender][taskIds[msg.sender][i]];
            
            if (tempTask.done) {
                taskList[j] = tempTask;
                j++;
            }
        }
        return taskList;
    }

    function getUndoneTasks() public view returns (task[] memory taskList) {
        require(msg.sender != address(0), "Address cannot be zero");
        uint256 j = 0;
        for (uint256 i = 0; i < taskIds[msg.sender].length; i++) {
            task memory tempTask = tasks[msg.sender][taskIds[msg.sender][i]];
            
            if (!tempTask.done) {
                taskList[j] = tempTask;
                j++;
            }
        }
        return taskList;
    }

    function markTaskDone(uint16 _id) public returns (task memory updatedTask) {
        require(msg.sender != address(0), "Address cannot be zero");
        tasks[msg.sender][_id].done = true;
        updatedTask = tasks[msg.sender][_id];
        return updatedTask;
    }

    function getTasksByCategory(uint16 _id) public view returns (task[] memory taskList) {
        require(msg.sender != address(0), "Address cannot be zero");
        uint256 j = 0;
        for (uint256 i = 0; i < taskIds[msg.sender].length; i++) {
            task memory tempTask = tasks[msg.sender][taskIds[msg.sender][i]];
            
            if (tempTask.category_id == _id) {
                taskList[j] = tempTask;
                j++;
            }
        }
        return taskList;
    }
}