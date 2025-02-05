import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports: [ FormsModule ],  // Import FormsModule for ngModel
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new task when add() is called', () => {
    component.Text = 'New Task';
    component.add();
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].text).toBe('New Task');
    expect(component.todos[0].done).toBeFalse();
  });

  it('should clear the input field after adding a task', () => {
    component.Text = 'New Task';
    component.add();
    expect(component.Text).toBe('');
  });

  it('should remove a task when remove() is called', () => {
    component.todos = [{ text: 'Task 1', done: false }];
    component.remove(0);
    expect(component.todos.length).toBe(0);
  });

  it('should toggle the done status of a task', () => {
    component.todos = [{ text: 'Task 1', done: false }];
    component.todos[0].done = !component.todos[0].done;
    expect(component.todos[0].done).toBeTrue();
  });
});
