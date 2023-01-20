import json
import boto3

client = boto3.client('dynamodb')


def handler(event, context):
    data = client.get_item(
        TableName='zenfriendsdb',
        Key={
            'timestamp': {
                'S': '1234'
            },
            'username': {
                'S': 'test'
            }
        }
    )

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(data)
    }
