# #!/bin/zsh

# # デフォルト値を設定
# DEFAULT_TARGET="release/dev"
# TARGET=${1:-$DEFAULT_TARGET}

# # 現在のブランチを取得
# CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# # メインブランチにいるか確認
# if [ "$CURRENT_BRANCH" != "main" ]; then
#   echo "⚠️ 現在 main ブランチではありません。main ブランチに切り替えてください。"
#   exit 1
# fi

# echo "🔄 $TARGET ブランチにマージを開始します..."

# # ターゲットブランチに切り替え
# git checkout $TARGET

# # リモートから最新の変更を取得
# echo "🔄 $TARGET ブランチの最新情報を取得中..."
# if git pull origin $TARGET; then
#   echo "✅ $TARGET ブランチの更新成功"
# else
#   echo "❌ $TARGET ブランチの更新失敗"
#   git checkout $CURRENT_BRANCH
#   exit 1
# fi

# # マージ実行
# if git merge main -m "merge: main into $TARGET"; then
#   echo "✅ マージ成功"
  
#   # プッシュ
#   if git push origin $TARGET; then
#     echo "✅ $TARGET へのプッシュ成功"
#   else
#     echo "❌ $TARGET へのプッシュ失敗"
#     git checkout $CURRENT_BRANCH
#     exit 1
#   fi
# else
#   echo "❌ マージ失敗"
#   git checkout $CURRENT_BRANCH
#   exit 1
# fi

# # 元のブランチに戻る
# git checkout $CURRENT_BRANCH
# echo "✅ $CURRENT_BRANCH ブランチに戻りました"

# echo "🎉 すべての処理が完了しました" 