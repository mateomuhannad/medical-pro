import React from "react";

class TaskList extends React.Component {
    state = { tasks: [] };
    componentDidMount() {
        const { tasks } = this.props;
        this.setState({
            tasks
        });
    }
    onDragStart = evt => {
        let element = evt.currentTarget;
        element.classList.add("dragged");
        evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
        evt.dataTransfer.effectAllowed = "move";
    };
    onDragEnd = evt => {
        evt.currentTarget.classList.remove("dragged");
    };
    onDragEnter = evt => {
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.add("dragged-over");
        evt.dataTransfer.dropEffect = "move";
    };
    onDragLeave = evt => {
        let currentTarget = evt.currentTarget;
        let newTarget = evt.relatedTarget;
        if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
            return;
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.remove("dragged-over");
    };
    onDragOver = evt => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
    };
    onDrop = (evt, value) => {
        evt.preventDefault();
        evt.currentTarget.classList.remove("dragged-over");
        let data = evt.dataTransfer.getData("text/plain");
        let tasks = this.state.tasks;
        let updated = tasks.map(task => {
            if (task.id == data) task.done = value;
            return task;
        });
        this.setState({ tasks: updated });
    };
    render() {
        const { tasks } = this.state;
        let pending = tasks.filter(t => !t.done);
        let done = tasks.filter(t => t.done);
        return (
            <div className="container" style={{ display: 'flex' }}>
                <div
                    className="pending small-box"
                    onDragLeave={e => this.onDragLeave(e)}
                    onDragEnter={e => this.onDragEnter(e)}
                    onDragEnd={e => this.onDragEnd(e)}
                    onDragOver={e => this.onDragOver(e)}
                    onDrop={e => this.onDrop(e, false)}
                >
                    <h3>pending</h3>
                    {pending.map(task => (
                        <div
                            className="task"
                            key={task.name}
                            id={task.id}
                            draggable
                            onDragStart={e => this.onDragStart(e)}
                            onDragEnd={e => this.onDragEnd(e)}
                        >
                            {task.name}
                        </div>
                    ))}
                </div>
                <div
                    className="done small-box"
                    onDragLeave={e => this.onDragLeave(e)}
                    onDragEnter={e => this.onDragEnter(e)}
                    onDragEnd={e => this.onDragEnd(e)}
                    onDragOver={e => this.onDragOver(e)}
                    onDrop={e => this.onDrop(e, true)}
                >
                    <h3>Done</h3>
                    {done.map(task => (
                        <div
                            className="task"
                            key={task.name}
                            id={task.id}
                            draggable
                            onDragStart={e => this.onDragStart(e)}
                            onDragEnd={e => this.onDragEnd(e)}
                        >
                            {task.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TaskList;
