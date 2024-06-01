export const onClickSlide = (e) => {
    const todoItem = e.target.closest("li").querySelector(".todo_item");
    todoItem.classList.toggle("side");
};
