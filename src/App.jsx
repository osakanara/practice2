import React from "react";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了リスト</p>
        <ul>
          <div>
            <li> TODOする1</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li> TODOする2</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了リスト</p>
        <ul>
          <div>
            <li> TODO済み</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
