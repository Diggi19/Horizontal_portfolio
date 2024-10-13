
// todo: ISSUE 1
/*
* problem faced
when state changes to display projectList component the ListComponent takes the scrolling of previous page i.e it remains in the middle 
this need to be fixed

* Expected behavious:
when we go from main main to projects page it should scroll to start showing the project page intro

* current behaviour:
it is going in between projects

* solution
```
useEffect(() => {
    if (scrollContainerRef.current && isProjectPageOpen) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' }); // Reset horizontal scroll
    }
  }, [isProjectPageOpen]);
  
```
*/